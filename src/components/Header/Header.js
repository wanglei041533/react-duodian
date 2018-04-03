import React,{ Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './Header.css'

import axios from 'axios'

const aaa = '/weixin/home/businessIndex?param=%7B%22index%22%3A0%2C%22currentPage%22%3A1%2C%22reqUrl%22%3A%22https%3A%2F%2Fcmsapi.dmall.com%2Fapp%2Fweb%2Fjson%2F1%2F10485%22%2C%22pairs%22%3A%221-0-10485%22%2C%22code%22%3A%221%22%2C%22networkType%22%3A2%7D&token=4C35965665FDB4542E0EAD03685299B7D1DFC83AFEA126E2557B5E80C373F2321DA23C9DA278A57C739D78F7E40297048619B1B7B8D22C3B855871A903368417DAF476FB487DFC1C06D35062801BC5269B414E9562E5C258D1E1B27C81B60AEF62E834CCE53F42D3EDCAA1DE630B639D8FF0C9E7F6203FB891B011E612FBEFA4&source=2&tempid=C7EA9A2376100002F25B1B90681017F6&pubParam=%7B%7D&_=1522726391464'
axios.get('/api'+ aaa).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(1)
})

export default class Header extends Component{
    render(){
        return(
            <div>
                <NavBar
                mode="dark"
                 leftContent="Back"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >NavBar</NavBar>
            </div>
        )
    }
}