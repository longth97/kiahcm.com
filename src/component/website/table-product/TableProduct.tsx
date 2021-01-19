type TableProducts = {
    dataList ?: object[],
}

export default function TableProducts(props: TableProducts) {
    return <div className="tableProducts"  >
        <table border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <th > <span> MẪU XE</span></th>
                    <th ><span>GIÁ BÁN LẺ KHUYẾN NGHỊ(GỒM VAT – VND)</span> </th>
                    <th ><span>ƯU ĐÃI(GỒM VAT – VND)</span> </th>
                </tr>
                {props.dataList 
                    ? props.dataList.map((value, index)=>{
                        return <tr key={index}>
                            <td> <span>{value.name}</span></td>
                            <td><span>{value.price}</span></td>
                            <td><span>Liên hệ: <a href={`tel:${value.contacts}`}>{value.contacts}</a></span></td>
                        </tr>
                    })
                    :<></>
                }
            </tbody>
        </table>
        <style jsx>{`
            .tableProducts{
                width: 100%;
                table{
                    width:100%;
                }
                tbody{
                    width:100%;
                    span{
                        display: block;
                        padding: 10px 0;
                        color: rgb(119, 119, 119);

                    }
                }
                th{
                    text-align: left;
                    /* font-family: "Roboto-Bold"; */
                    font-size: 1.1vw;
                }
                th:nth-child(1){
                    width:30%;
                }
                th:nth-child(2){
                    width:50%;
                }
                th:nth-child(3){
                    width:20%;
                }
                td{
                    font-size: 1vw;
                    border-top: 1px silver solid;
                    
                    font-family: "Roboto-Thin";
                    
                }
                tr:last-child{
                    td{
                        border-bottom: 1px silver solid;
                    }
                  
                }
                td{
                    a{
                        color: red;
                    }
                }
            }
       `}</style>
    </div>
}