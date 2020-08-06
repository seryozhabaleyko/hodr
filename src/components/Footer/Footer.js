import React, { memo } from 'react';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="container">main</div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="copyright">
                        © 2020 Hodr (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/seryozhabaleyko"
                        >
                            author
                        </a>
                        )
                    </div>
                    <div className="social">
                        <span>Присоединяйтесь:</span>
                        <a className="vkontakte" target="_blank" href="/">
                            vkontakte
                        </a>
                        <a className="facebook" target="_blank" href="/">
                            facebook
                        </a>
                        <a className="twitter" target="_blank" href="/">
                            twitter
                        </a>
                        <a className="instagram" target="_blank" href="/">
                            instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
