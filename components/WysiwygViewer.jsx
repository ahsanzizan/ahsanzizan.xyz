import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';

export default React.forwardRef(function WysiwygViewer({ content, ref }) {
    return (
        <Viewer ref={ref} initialValue={content} plugins={[codeSyntaxHighlightPlugin]} theme={'dark'} />
    )
})
