import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import 'prismjs/themes/prism-okaidia.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

export default React.forwardRef(function WysiwygViewer({ content, ref }) {
    return (
        <Viewer ref={ref} initialValue={content} plugins={[codeSyntaxHighlight]} theme='dark' />
    )
})
