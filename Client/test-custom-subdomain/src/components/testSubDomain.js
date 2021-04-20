import axios from 'axios';
import React from 'react';

class TestComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.checkSubDomain();     
    }
    checkSubDomain = ()=>{
        let host=window.location.host;
        console.log("Test ",host);
        let subdomainVal=host.split('.');
        let name=subdomainVal[0].includes('localhost')?'abc':subdomainVal[0];
        console.log("sun=bdomain",subdomainVal);
        console.log("sun=bdomain",subdomainVal[0]);
        axios.get(`http://testsub.ideadeployer.com/checkSubDomain?subDomainName=${name}`)
        .then((res)=>{
            console.log(res.data);
            if(!res.data.verifySubdomain){
                window.location="https://app.ideadeployer.com/"
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}
export default TestComponent;