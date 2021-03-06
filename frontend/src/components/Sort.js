import React from 'react';
import { Form } from 'react-bootstrap';

const Sort = ({sort, setSort}) => {
    return(
        <div className="ml-3 col-md-3 d-flex align-items-center justify-content-end"> 
            <h5 style={{ width: '80%', fontSize: "18px", color:"grey", fontWeight: "lighter"}}>排序依</h5>
            <Form.Control as="select" value={sort} className="ml-3 mb-2" style={{ width: '20%', fontSize: "18px", borderRadius: "20px" }} onChange={e => setSort(e.target.value)}>
                <option value="最新">最新</option>
                <option value="關注">關注</option>
                <option value="回覆">回覆</option>
            </Form.Control>
        </div>
    )
}

export default Sort;