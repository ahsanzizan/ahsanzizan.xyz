import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import 'prismjs/themes/prism.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import fontSize from "tui-editor-plugin-font-size";
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import React from 'react';

export default React.forwardRef(function WysiwygEditor({ editorRef, initialValue }) {
    const convertBlob = blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise(resolve => {
            reader.onloadend= () => resolve(reader.result);
        });
    }

    async function uploadContent(blob) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('post', 'api/cloudinaryUpload', true);
            xhr.responseType = 'json';
            xhr.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
            convertBlob(blob).then(base64 => xhr.send(JSON.stringify({ upload: base64 })));
            xhr.addEventListener('load', () => {
                const response = xhr.response;
                resolve({
                    default: response.url
                });
            });
        })
    }

    return <Editor ref={editorRef} initialValue={initialValue} initialEditType='markdown' height='700px' 
    usageStatistics={false} toolbarItems={[['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]}
    hooks={{
        addImageBlobHook: (blob, callback) => {
          uploadContent(blob)
            .then(response => {
              callback(response.default, 'Uploaded media');
            }).catch(error => {
              console.log(error);
            });
        },
    }} plugins={[colorSyntax, codeSyntaxHighlightPlugin, fontSize]} theme='dark' />
});
