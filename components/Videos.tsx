import {Video} from "@/payload-types";

export default function Videos({ videos }: {videos: Video[]}) {
    return(
        <div className="p-16">
            <div className="video-list items-center justify-around px-4">
                {videos.map((item, index) => {
                    return (
                        <div key={index} className="video-container">
                            <iframe src={item.link} className="video" allowFullScreen/>
                        </div>
                    )
                })}
            </div>
            <div className="my-16">
                <h1 className="text-center text-3xl"><a className="hover:underline" href="https://www.youtube.com/channel/UCwjaZcTFkJHtUNU8qAHEX9w?&ab_channel=KepKocka">Youtube-csatornánk</a></h1>
            </div>
        </div>
    )
}