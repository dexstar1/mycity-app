import React from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Alert,
    Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormInput,
    FormGroup,
    FormSelect,
    FormRadio,
  } from "shards-react";

import MultiSelect from "react-multi-select-component";

// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class AddUser extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            zip: "",
            phone: "",
            business: "",
            website: "",
            vocation: [],
            vocationNew: [],
            lifestyle: [],
            city: "",
            note: "",
            meet: "",
            tags: [],
            rating: "",
            group: "",
            isLoading: false,
            alert: null,
            combinedData: {},

        }

        this.groupChange = this.groupChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.businessChange = this.businessChange.bind(this);
        this.websiteChange = this.websiteChange.bind(this);
        this.vocationChange = this.vocationChange.bind(this);
        this.lifestyleChange = this.lifestyleChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.meetChange = this.meetChange.bind(this);
        this.tagsChange = this.tagsChange.bind(this);
        // this.rearrageVocation = this.rearrageVocation.bind(this);

    }

    componentDidMount() {
        this.getCombinedData().then(() => {
            this.rearrageVocation();
        });
    }

    rearrageVocation() {
            let x = this.state.combinedData.vocation.map((vocation, index) => {
                return {
                    label : vocation,
                    value: vocation
                }
            })

            this.setState({
                vocationNew: x
            })
    }

    async getCombinedData() {
        await fetch("./api/combined-data")
            .then((response) => response.json())
            .then( (responseJson) => {
                    this.setState({
                        combinedData: responseJson,
                        isLoading: false
                    })
            })
            .catch((error) => {
                
            })
    }

    submitData = (e) => {
        e.preventDefault();
        this.setState({isLoading: true, alert: true})
        fetch("./api/user", {
            method: 'POST',
              body: JSON.stringify({
                "name": this.state.name,
                "email": this.state.email,
                "phone": this.state.phone,
                "zip": this.state.zip,
                "vocation": this.state.vocation,
                "lifestyle": this.state.lifestyle,
                "city": this.state.city,
                "tags": this.state.tags,
                "entry": this.state.entry,
            })
            })
            .then((response) => response.json())
            .then( (responseJson) => {
                // console.log(responseJson)
                if (responseJson.status == true) {
                    this.setState({
                        alert: responseJson.message,
                        isLoading: false
                    })
                }
            })
            .catch((error) => {
                
            })
    }

    groupChange(event) {
        this.setState({
            group: event.target.value
        });
    }

    ratingChange(rating) {
        this.setState({
            rating: rating
        });
    }

    nameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    zipChange(event) {
        this.setState({
            zip: event.target.value
        });
    }

    phoneChange(event) {
        this.setState({
            phone: event.target.value
        });
    }

    businessChange(event) {
        this.setState({
            business: event.target.value
        });
    }

    websiteChange(event) {
        this.setState({
            website: event.target.value
        });
    }

    vocationChange(selected) {
        this.setState({
            vocation: selected
        });
    }

    lifestyleChange(selected) {
        this.setState({
            lifestyle: selected
        });
    }

    cityChange(event) {
        this.setState({
            city: event.target.value
        });
    }

    noteChange(event) {
        this.setState({
            note: event.target.value
        });
    }

    meetChange(event) {
        this.setState({
            meet: event.target.value
        });
    }

    tagsChange(selected) {
        this.setState({
            tags: selected
        });
    }
    

    render () {
        return (
            <Row>
            <Col>
                <Alert style={{display: !!this.state.alert ? 'inline-block' : 'none', position: 'fixed', top: 20, right: 20, zIndex: 10000 }} theme="success">
                    <div style={{display: this.state.isLoading ? 'inline-block' : 'none'}}>
                        <span className="spinner-border" role="status" aria-hidden="true"></span>
                        <span>Loading...</span>
                    </div>
                    <span>{this.state.alert}</span>
                </Alert>
                <Card small>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add New Know</h6>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                    <Row>
                        <Col>
                        <Form>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                <label htmlFor="addName">Name</label>
                                <FormInput
                                    id="addName"
                                    type="text"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.nameChange}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                <label htmlFor="addEmail">Email</label>
                                <FormInput
                                    id="addEmail"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.emailChange}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                <label htmlFor="addPhone">Phone</label>
                                <FormInput
                                    id="addPhone"
                                    type="number"
                                    placeholder="Phone"
                                    value={this.state.phone}
                                    onChange={this.phoneChange}
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addBusinessName">Business Name</label>
                                        <FormInput
                                            id="addBusinessName"
                                            type="text"
                                            placeholder="Business Name"
                                            value={this.state.business}
                                            onChange={this.businessChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addWebsite">Website</label>
                                        <FormInput
                                            id="addWebsite"
                                            type="url"
                                            placeholder="Website"
                                            value={this.state.website}
                                            onChange={this.websiteChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addVocation">Vocations</label>
                                        {/* <FormSelect value={this.state.vocation} onChange={this.vocationChange} id="addVocation">
                                            <option>Choose Vocation...</option>
                                            {
                                                this.state.combinedData.vocation ?
                                                    this.state.combinedData.vocation.map((vocation, index) => (
                                                        <option key={index}>{vocation}</option>
                                                    ))
                                                    :
                                                null
                                            }
                                        </FormSelect> */}

                                        {
                                            this.state.vocationNew ?

                                            <MultiSelect
                                                options={this.state.vocationNew}
                                                value={this.state.vocation}
                                                onChange={this.vocationChange}
                                                labelledBy={"Select"}
                                            />
                                            :
                                            null
                                        }

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addLifestyle">lifestyle</label>
                                        {/* <FormSelect value={this.state.lifestyle} onChange={this.lifestyleChange} id="addLifestyle">
                                            <option>Specify Lifestyle...</option>
                                            {
                                                this.state.combinedData.lifestyle ?
                                                    this.state.combinedData.lifestyle.map((lifestyle, index) => (
                                                        <option key={index}>{lifestyle.ls_name}</option>
                                                    ))
                                                    :
                                                null
                                            }
                                        </FormSelect> */}

                                        {
                                            this.state.combinedData.lifestyle ?

                                            <MultiSelect
                                                options={this.state.combinedData.lifestyle}
                                                value={this.state.lifestyle}
                                                onChange={this.lifestyleChange}
                                                labelledBy={"Select"}
                                            />
                                            :
                                            null
                                        }
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addCity">City</label>
                                        <FormSelect value={this.state.city} onChange={this.cityChange} id="addCity">
                                            <option>Specify City...</option>
                                            {
                                                this.state.combinedData.location ?
                                                    this.state.combinedData.location.map((location, index) => (
                                                        <option key={index}>{location.name}</option>
                                                    ))
                                                    :
                                                null
                                            }
                                        </FormSelect>
                                        <span style={{ fontSize: "12px" }}>
                                            ( In case your city is not listed, request to list
                                            it here.)
                                        </span>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                    <label htmlFor="addZip">Zip</label>
                                    <FormInput
                                        id="addZip"
                                        type="number"
                                        placeholder="Zip"
                                        value={this.state.zip}
                                        onChange={this.zipChange}
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addToMeet">
                                            Who do they want to meet by vocation
                                        </label>
                                        {
                                            this.state.vocationNew ?

                                            <MultiSelect
                                                options={this.state.vocationNew}
                                                value={this.state.vocation}
                                                onChange={this.vocationChange}
                                                labelledBy={"Choose Vocation"}
                                            />
                                            :
                                            null
                                        }
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                         {/* <FormSelect value={this.state.tags} onChange={this.tagsChange} id="addTags">
                                            <option>Specify Tags...</option>
                                            {
                                                this.state.combinedData.tag ?
                                                    this.state.combinedData.tag.map((tag, index) => (
                                                        <option key={index}>{tag.tagname}</option>
                                                    ))
                                                    :
                                                null
                                            }
                                        </FormSelect> */}
                                        <label htmlFor="addTags">Tags:</label>
                                        {
                                                this.state.combinedData.tag ?
                                       
                                        <MultiSelect
                                            options={this.state.combinedData.tag}
                                            value={this.state.tags}
                                            onChange={this.tagsChange}
                                            labelledBy={"Select"}
                                        />

                                        :
                                                null
                                            }
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addGroup">Group:</label>
                                        <FormSelect value={this.state.group} onChange={this.groupChange} id="addGroup">
                                            <option>Specify Group...</option>
                                            {
                                                this.state.combinedData.location ?
                                                    this.state.combinedData.location.map((location, index) => (
                                                        <option key={index}>{location.name}</option>
                                                    ))
                                                    :
                                                null
                                            }
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label htmlFor="addNotes">Note(s)</label>
                                        <FormInput
                                            id="addNotes"
                                            type="text"
                                            placeholder="Note(s)"
                                            value={this.state.note}
                                            onChange={this.noteChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <label htmlFor="addRating" className="add-rating">Rating</label>
                                    <div className="radio-group">
                                        <div className="add-radio">
                                            <FormRadio 
                                                name="rating"
                                                checked={this.state.rating === "5"}
                                                onChange={() => {
                                                    this.ratingChange("5");
                                                }}
                                            >5</FormRadio>
                                        </div>
                                        <div className="add-radio">
                                            <FormRadio 
                                                name="rating"
                                                checked={this.state.rating === "10"}
                                                onChange={() => {
                                                    this.ratingChange("10");
                                                }}
                                            >10</FormRadio>
                                        </div>
                                        <div className="add-radio">
                                            <FormRadio 
                                                name="rating"
                                                checked={this.state.rating === "15"}
                                                onChange={() => {
                                                    this.ratingChange("15");
                                                }}
                                            >15</FormRadio>
                                        </div>
                                        <div className="add-radio">
                                            <FormRadio 
                                                name="rating"
                                                checked={this.state.rating === "20"}
                                                onChange={() => {
                                                    this.ratingChange("20");
                                                }}
                                            >20</FormRadio>
                                        </div>
                                        <div className="add-radio">
                                            <FormRadio 
                                                name="rating"
                                                checked={this.state.rating === "25"}
                                                onChange={() => {
                                                    this.ratingChange("25");
                                                }}
                                            >25</FormRadio>
                                        </div>
                                    </div>
            
                                    <Card className="number-of-reviews">
                                        <CardHeader className="border-bottom">
                                            Number of Reviews
                                        </CardHeader>
                                        <CardBody>
                                            <li>
                                            <div>5 (Very Low)</div>
                                            <div style={{ textAlign: "center" }}>-</div>
                                            <div>Non Rated</div>
                                            </li>
                                            <li>
                                            <div>10 (Low)</div>
                                            <div style={{ textAlign: "center" }}>-</div>
                                            <div>6-15</div>
                                            </li>
                                            <li>
                                            <div>15 (Mid)</div>
                                            <div style={{ textAlign: "center" }}>-</div>
                                            <div>16-25</div>
                                            </li>
                                            <li>
                                            <div>20 (High)</div>
                                            <div style={{ textAlign: "center" }}>-</div>
                                            <div>25-50</div>
                                            </li>
                                            <li>
                                            <div>25 (Top)</div>
                                            <div style={{ textAlign: "center" }}>-</div>
                                            <div>51 +</div>
                                            </li>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <br/>

                            <Button
                                className="bg-primary text-white text-center rounded p-3 "
                                type="submit"
                                onClick={this.submitData.bind(this)}
                            >
                            Submit
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                    </ListGroupItem>
                </ListGroup>
                </Card>
            </Col>
            </Row>
        );
    }
}

export default AddUser;
