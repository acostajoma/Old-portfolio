const ProjectCard = ({imageSrc, title, description, projectHref}) => {
    return (
        <div className="max-w-[20rem]">
            <img className="rounded-2xl min-w-full" src={imageSrc} alt="Project image" loading="lazy"/>
            <div className="text-white p-2">
                <h3 className="text-lg mb-2 font-bold">{title}</h3>
                <p>{description}</p>
                <a  className="block bg-sky-600 text-lg font-bold rounded-xl p-2 mt-2 hover:bg-sky-400" rel="noopener noreferrer" target={"_blank"} href={projectHref}>View Here</a>
            </div>
        </div>
    )
}

export default ProjectCard