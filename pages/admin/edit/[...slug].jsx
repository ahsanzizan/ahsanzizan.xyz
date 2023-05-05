import AdminNavbar from "@/components/AdminNavbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import { withSessionSsr } from "@/lib/session";
import dynamic from "next/dynamic";
import React, { createRef } from "react";
const WysiwygEditor = dynamic(() => import("@/components/WysiwygEditor"), { ssr: false, });

export default class BlogEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            tags: (
                props.data.tags.length ? props.data.tags.map((tag, i) => {
                    return <div key={i} className="cursor-pointer rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" onClick={this.removeTag.bind(this)}>{tag}</div>
                }) : null
            ),
            iTag: "",
        }
        this.saveChange = this.saveChange.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editorRef = createRef();
    }

    async saveChange(e) {
        e.preventDefault();
        var formData = {
            ...this.state.data,
            title: e.target.title.value,
            link: e.target.link.value,
            post: this.editorRef.current.editorInst.getMarkdown(),
            tags: this.state.data.tags,
        };
        const fetchData = await fetch('/api/upsertBlog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).then(x => x.json());
        if (fetchData.status == 200) {
            if (fetchData.isNew) window.location.href = `/admin/edit/${e.target.link.value}`;
            alert("Saved successfully");
        }
        else {
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
                    return <div key={i} className="cursor-pointer rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" onClick={this.removeTag.bind(this)}>{tag}</div>
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
                    return <div key={i} className="cursor-pointer rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" onClick={this.removeTag}>{tag}</div>
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
                <Header title="Edit Content" />
                <AdminNavbar />
                <div className="mx-auto max-w-4xl px-2 xl:max-w-5xl py-5">
                    <div className="flex h-screen flex-col justify-between">
                        <form action="#" onSubmit={this.saveChange} >
                            <div className="mb-5">
                                <div className="mb-2">
                                    <tag className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Title
                                    </tag>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="title" defaultValue={this.state.data.title} required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="mb-2">
                                    <tag className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Link
                                    </tag>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="link" defaultValue={this.state.data.link} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="mb-2">
                                    <tag className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0">
                                        Add Tag
                                    </tag>
                                </div>
                                <div className="w-1/2 flex items-center gap-16">
                                    <input id="addTag" autoComplete="off" onKeyDown={this.enterBTN} value={this.state.iTag} className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="iTag" onChange={this.handleInputChange} />
                                    <button id="addTagButton" className="md:w-full duration-300 bg-main hover:bg-teal-600 border-main hover:border-teal-600 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={this.addTag}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="mb-2">
                                    <tag className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Tags
                                    </tag>
                                </div>
                                <div className="md:w-2/3 flex flex-wrap gap-2">
                                    {this.state.tags}
                                </div>
                            </div>
                            <WysiwygEditor editorRef={this.editorRef} initialValue={this.state.data.post} />
                            <button className="mb-2 w-full duration-300 bg-main hover:bg-teal-600 border-main hover:border-teal-600 text-sm border-4 text-white py-2 my-5 px-2 rounded" type="submit">
                                Save
                            </button>
                        </form>
                        <div className="block py-10">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ query, req }) {
        if (!req.session?.state?.loggedIn) {
            return {
                redirect: {
                    destination: '/admin/login',
                    permanent: false,
                }
            }
        } else {
            var { slug } = query;
            slug = slug.join('/');
            let getData;
            if (slug == "new") {
                getData = {
                    title: "",
                    link: "",
                    post: "",
                    tags: []
                }
            } else {
                const connectDB = await clientProm;
                getData = await connectDB.db('personal-blog').collection('blog-post').findOne({ link: slug });
                if (!getData) {
                    return {
                        redirect: {
                            destination: '/404',
                            permanent: false,
                        }
                    }
                }
            }
            return {
                props: {
                    data: JSON.parse(JSON.stringify(getData))
                }
            }
        }
    }
);