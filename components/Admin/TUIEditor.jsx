'use client';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import 'prismjs/themes/prism-coy.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import React from 'react';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

export default React.forwardRef(function TUIEditor({ editorRef, initialValue }) {
    const convertBlob = blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise(resolve => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
    };

    async function upload(blob) {
        return new Promise(function (resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/api/cloudinary-upload', true);
          xhr.responseType = 'json';
          xhr.setRequestHeader("Content-Type", "application/json");
          convertBlob(blob).then((base64) => {
            xhr.send(JSON.stringify({ upload: base64 }));
          });

          xhr.addEventListener('load', () => {
            const response = xhr.response;
            if (!response || response.error) {
              return reject(new Error(response.error));
            }
    
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
          upload(blob)
            .then(response => {
              callback(response.default, document.getElementById('toastuiAltTextInput').value);
            }).catch(error => {
              console.log(error);
            });
        },
    }} plugins={[colorSyntax, codeSyntaxHighlight, fontSize]} />
});
