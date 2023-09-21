import BounceLoader from "react-spinners/BounceLoader";
import PuffLoader  from "react-spinners/PuffLoader";

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <PuffLoader 
            color="#F20000"
            loading={loading}
            size={50}
        />
    )
}

export default Loader;