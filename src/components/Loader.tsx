import BounceLoader from "react-spinners/BounceLoader";
import PuffLoader from "react-spinners/PuffLoader";

const Loader: React.FC<{ loading: boolean, size?: number | string, color?: string }> = (props) => {
    const { loading, size, color } = props;
    return (
        <PuffLoader
            color={color ? color : "#F20000"}
            loading={loading}
            size={size || 50}
        />
    )
}

export default Loader;