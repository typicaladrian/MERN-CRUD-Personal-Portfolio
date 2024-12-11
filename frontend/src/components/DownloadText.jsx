const DownloadText = ({ fileName, innerText }) => {
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
        <div className='underline cursor-pointer' onClick={onButtonClick}>
            {innerText}
        </div>
    );
};

export default DownloadText;