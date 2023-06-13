"use client"
import ProgressBar from "next-nprogress-bar"

export default function NProgress() {
    return <ProgressBar appDirectory={true} height="5px" color="#c8c8c8fc" shallowRouting />
}