// COMPONENTS
import Loader from "../Loader"


const Illustration = ({ curves }) => {
    /*======== RENDERER ========*/
    return (
        <div id="illustration" className="w-full h-full flex flex-col pt-28">
            {
                curves === null ?
                    <div className="w-fit h-fit flex flex-col items-center">
                        <span>No poem to illustrate yet...</span>
                        <span className="m-3">［(－－)］zzzz</span>
                    </div>
                : curves === "loading" ?
                    <Loader />
                :
                    curves.map((curve, index) => <div key={index} className={"w-full h-5 flex justify-center items-end"} dangerouslySetInnerHTML={{__html: curve}}></div>)
            }
        </div>
    );
};

export default Illustration;