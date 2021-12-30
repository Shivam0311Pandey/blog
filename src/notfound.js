import svg from './images/not_found.svg';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={ svg } alt="404, not found!" />
        </div>
    );
}
 
export default NotFound;