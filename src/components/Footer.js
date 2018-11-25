import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/pkafei" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/pkafei" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://medium.com/@beyondhackers" className="icon fa-medium"><span className="label">Medium</span></a></li>
                        <li><a href="https://www.linkedin.com/in/portia-burton-b9904610/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2019</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
