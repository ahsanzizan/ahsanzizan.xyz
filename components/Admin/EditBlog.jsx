'use client';
import dynamic from "next/dynamic";
import React, { createRef } from "react";
const WysiwygEditor = dynamic(() => import("@components/Admin/WysiwygEditor"), { ssr: false, });

export default class EditBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            tags: (
                props.data.tags.length ? props.data.tags.map((tag, i) => {
                    return <div key={i} className="cursor-pointer rounded-full border-2 border-black px-3 py-1 bg-black font-semibold mr-3 uppercase duration-300 hover:bg-white" onClick={this.removeTag.bind(this)}>{tag}</div>
                }) : null
            ),
            iTag: "",
        }

        this.saveChanges = this.saveChanges.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editorRef = createRef();
        this.navContents = [
            {
                title: 'Home',
                href: '/blog/admin',
                className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
                mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
                useAL: true,
            },
            {
                title: 'Logout',
                href: '/api/logout',
                className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
                mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
                useAL: true,
            },
        ]
    }

    async saveChanges(e) {
        e.preventDefault();
        var formData = {
            ...this.state.data,
            title: e.target.title.value,
            link: e.target.link.value,
            post: this.editorRef.current.editorInst.getMarkdown(),
            tags: this.state.data.tags,
        };

        const fetchData = await fetch('/api/upsert-blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).then(x => x.json());

        if (fetchData.status == 200) {
            window.location.href = `/admin/`;
            alert("Saved successfully");
        } else {
            alert(`Failed to save change\n\nerror:\n${fetchData.error}`);
        }
    }

    addTag() {
        if (!this.state.iTag.toLowerCase()) return false;
        if (this.state.data.tags.includes(this.state.iTag.toLowerCase())) return false;
        this.state.data.tags.push(this.state.iTag.toLowerCase());
        this.setState({
            ...this.state,
            tags: (
                this.state.data.tags.length ? this.state.data.tags.map((tag, i) => {
                    return <div key={i} className="cursor-pointer border-2 border-black px-3 py-1 bg-black font-semibold mr-3 uppercase duration-300 text-white hover:text-black hover:bg-white" onClick={this.removeTag.bind(this)}>{tag}</div>
                }) : null
            ),
            iTag: ""
        });
    }

    removeTag(e) {
        this.state.data.tags.splice(this.state.data.tags.indexOf(e.target.innerHTML), 1);
        this.setState({
            ...this.state,
            tags: (
                this.state.data.tags.length ? this.state.data.tags.map((tag, i) => {
                    return <div key={i} className="cursor-pointer rounded-full border-2 border-black px-3 py-1 bg-black font-semibold mr-3 uppercase duration-300 hover:bg-white" onClick={this.removeTag}>{tag}</div>
                }) : null
            ),
            iTag: ""
        });
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }

    enterBTN(e) {
        if (e.keyCode == 13) {
            document.getElementById("addTagButton").click();
            e.preventDefault();
        }
    }
    
    render() {
        return (
            <>
                <div className="mx-auto max-w-4xl px-2 xl:max-w-5xl py-32">
                    <div className="flex flex-col justify-between">
                        <form action="#" onSubmit={this.saveChanges} >
                            <div className="mb-5">
                                <div className="mb-2">
                                    <tag className="block uppercase tracking-wide text-xs font-extrabold mb-2">
                                        Title
                                    </tag>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="tracking-widest appearance-none block w-full font-bold bg-transparent text-black border-2 border-transparent border-b-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black" type="text" name="title" defaultValue={this.state.data.title} required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="mb-2">
                                    <tag className="block uppercase tracking-wide text-xs font-extrabold mb-2">
                                        Link
                                    </tag>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="tracking-widest appearance-none block w-full font-bold bg-transparent text-black border-2 border-transparent border-b-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black" type="text" name="link" defaultValue={this.state.data.link} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="mb-2">
                                    <tag className="block uppercase tracking-wide text-xs font-extrabold mb-2">
                                        Add Tag
                                    </tag>
                                </div>
                                <div className="w-1/2 flex items-center gap-16">
                                    <input id="addTag" autoComplete="off" onKeyDown={this.enterBTN} value={this.state.iTag} className="tracking-widest appearance-none block w-full font-bold bg-transparent text-black border-2 border-transparent border-b-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black" type="text" name="iTag" onChange={this.handleInputChange} />
                                    <button id="addTagButton" className="uppercase font-extrabold w-full h-14 bg-black border-2 border-black hover:bg-transparent text-white hover:text-black transition duration-300" type="button" onClick={this.addTag}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="mb-2">
                                    <tag className="block uppercase tracking-wide text-xs font-extrabold mb-2">
                                        Tags
                                    </tag>
                                </div>
                                <div className="w-2/3 flex flex-wrap gap-2 uppercase font-bebas">
                                    {this.state.tags}
                                </div>
                            </div>
                            <WysiwygEditor editorRef={this.editorRef} initialValue={this.state.data.post} />
                            <button className="uppercase font-extrabold w-full h-14 bg-black border-2 border-black hover:bg-transparent text-white hover:text-black transition duration-300" type="submit">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}