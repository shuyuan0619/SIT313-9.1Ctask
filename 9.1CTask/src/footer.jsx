
import React from 'react'
import { Icon } from 'semantic-ui-react'

function Footer() {

    return (
        <div className='footerContainer'>
            <div className="footer">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-4" style={{color: 'white', marginBottom: '18px'}}>
                                <div style={{textAlign: 'center'}}>Dev@Deakin Social Media</div>
                                <Icon size='huge' name='facebook'/>
                                <Icon size='huge' name='twitter' />
                                <Icon size='huge' name='instagram' />
                                <Icon size='huge' name='youtube' />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>

    )

}
export default Footer