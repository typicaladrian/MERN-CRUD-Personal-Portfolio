import { Link } from 'react-router-dom';

const DownloadButton = ({ fileName, innerText }) => {
    const onButtonClick = () => {
        fetch(fileName).then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = fileName;
                alink.click();
            });
        });
    };
    
    return (
        <div className='flex w-11/12 justify-center border-grey hover:border-primary border-2 rounded-full px-4 py-2 shadow-sm hover:shadow-lg hover:shadow-primary text-grey' onClick={onButtonClick}>
            {innerText}
        </div>
    );
};

export default DownloadButton;