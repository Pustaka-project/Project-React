import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            /*Category part. it can be used as reusable components*/
            <div className="category-body">
                <div className="category-row1">
                    <h2>CATEGORIES</h2>
                    <br />
                    <div className="col-md-3">
                        <img src="https://s-media-cache-ak0.pinimg.com/564x/85/44/da/8544dac44077c26e351801c7181a9e12.jpg" alt="Java" />
                        <p>JAVA</p>
                    </div>
                    <div className="col-md-3">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5fOycojDXxs0NSKYhM4jgNy_jhD9uDeFq3BzXpSQhlb4Rtx1yoA" alt="C & C++" />
                        <p>C & C++</p>
                    </div>

                    <div className="col-md-3">
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/3d/e3/8c/3de38c1ab9551c4468800f13ea604386.jpg" alt="Angular JS" />
                        <p>ANGULAR JS</p>
                    </div>

                    <div className="col-md-3">
                        <img src="https://facebook.github.io/react/img/logo.svg" alt="React JS" />
                        <p>REACT JS</p>
                    </div>
                </div>
                <br />
                <div className="category-row2">
                    <div className="col-md-3">
                        <img src="http://cdn.metaskills.net/downloads/code_o_lanterns/carvings/php.png" alt="pHp" />
                        <p>pHp</p>
                    </div>

                    <div className="col-md-3">
                        <img src="https://svn.python.org/www/branches/rest2web/beta.python.org/resources/design/logo/python-logo-master-flat-symbolonly-cafepress2.png" alt="pHp" />
                        <p>Python</p>
                    </div>

                    <div className="col-md-3">
                        <img src="https://www.file-extensions.org/imgs/app-picture/1189/mysql.jpg" alt="MySQL" />
                        <p>MySQL</p>
                    </div>

                    <div className="col-md-3">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtqkApMm3VIxbZQF1gT6hbuhla9mV2-jecb6m1JVdYoCugM4yq" alt=".NET" />
                        <p>.NET</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Category;