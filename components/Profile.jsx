import PromptCard from "./PromptCard";
import Loader from "./Loader";

const Profile = ({ name, desc, data, handleEdit, handleDelete, loaderVisible }) => {
    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="custom_gradient">
                    {name} Profile
                </span>
            </h1>
            <p className="desc text-left">{desc}</p>
            {loaderVisible ? (<Loader />) : (<div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>)}
        </section>
    )
}

export default Profile
