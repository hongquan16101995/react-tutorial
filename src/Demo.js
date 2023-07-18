function Demo() {
    //đoạn mã ở dưới chính là sử dụng JSX để xử lý
    return (
        <>
            <h1>Đây là nội dung của DemoComponent</h1>
            <p>Có thể thoải mái sử dụng các thẻ HTML</p>
            <img style={{width: '180px', height: '100px'}}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEp_n7y0zdUFw2RG_fOyreJgt8S1Aq08BlvYnZewF&s" alt=""/>
        </>
    )
}

//chuyển component thành thẻ HTLM để sử dụng
//nói cách khác là export component để import ở chỗ khác
export default Demo;
