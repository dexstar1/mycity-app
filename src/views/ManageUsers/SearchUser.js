import React from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormInput,
    FormGroup,
    FormSelect,
    Modal, 
  } from "shards-react";

// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";


class SearchUser extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            zip: "",
            phone: "",
            business: "",
            website: "",
            vocation: "",
            lifestyle: "",
            city: "",
            note: "",
            meet: "",
            tags: "",
            selectedRating: "",
            email: "",
            memberData: {},
            links: {
                prev: false,
                next: false
            },
            open: false,
            isLoading: false,
            alert: null,
            combinedData: {},
            entry: "",
        }
    
        this.toggle = this.toggle.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.vocationChange = this.vocationChange.bind(this);
        this.lifestyleChange = this.lifestyleChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.entryChange = this.entryChange.bind(this);
        this.tagsChange = this.tagsChange.bind(this);
    }

    componentDidMount() {
        this.getCombinedData();
        this.submitData()
    }

    getCombinedData() {
        fetch("./api/combined-data")
            .then((response) => response.json())
            .then( (responseJson) => {
                console.log(responseJson)
                // if (responseJson.status == true) {
                    this.setState({
                        combinedData: responseJson,
                        isLoading: false
                    })
                // }
            })
            .catch((error) => {
                
            })
    }
    
    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }
    
    submitData(page = null) {
        page = !!page ? `?page=${page}` : "";
        fetch(`http://localhost:8000/api/user${page}`)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                response.json().then(function(data) {
                    this.setState({
                        memberData: data,
                        links: {
                            prev: data.links.prev,
                            next: data.links.next
                        }
                    })
                }.bind(this));
            }.bind(this)
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }

    searchData = (e) => {
        e.preventDefault();
        this.setState({isLoading: true, alert: true})
        fetch("./api/user/search", {
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
                console.log(responseJson)
                this.setState({
                    memberData: responseJson,
                    links: {
                        prev: responseJson.links.prev,
                        next: responseJson.links.next
                    }
                })
            })
            .catch((error) => {
                
            })
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

    vocationChange(event) {
        this.setState({
            vocation: event.target.value
        });
    }

    lifestyleChange(event) {
        this.setState({
            lifestyle: event.target.value
        });
    }

    cityChange(event) {
        this.setState({
            city: event.target.value
        });
    }

    entryChange(event) {
        this.setState({
            entry: event.target.value
        });
    }

    tagsChange(event) {
        this.setState({
            tags: event.target.value
        });
    }

    render() {
        return (
        <>
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0" style={{display: "flex", justifyContent: "space-between"}}>
                                <div>
                                    <span>Members</span>
                                    &nbsp; &nbsp;
                                    <Button onClick={this.toggle} theme="accent">Search</Button>
                                </div>
                                <div>
                                    <span style={{fontSize: 12}}>
                                        {
                                            !!this.state.memberData.meta ?
                                                `${this.state.memberData.meta.current_page} - ${this.state.memberData.meta.per_page} of ${this.state.memberData.meta.last_page}`
                                            :
                                            null
                                        }
                                    </span>
                                    &nbsp; &nbsp;
                                    <Button  disabled={this.state.links.prev == null ? true : false} onClick={() => this.submitData(this.state.memberData.meta.current_page - 1)} theme="accent">prev</Button>
                                    &nbsp;
                                    <Button disabled={this.state.links.next == null ? true : false} onClick={() => this.submitData(this.state.memberData.meta.current_page + 1)} theme="accent">next</Button>
                                </div>
                            </h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                        Name
                                        </th>
                                        <th scope="col" className="border-0">
                                        Vocation
                                        </th>
                                        <th scope="col" className="border-0">
                                        Phone
                                        </th>
                                        <th scope="col" className="border-0">
                                        Email
                                        </th>
                                        <th scope="col" className="border-0">
                                        Location
                                        </th>
                                        <th scope="col" className="border-0">
                                        Package
                                        </th>
                                        <th scope="col" className="border-0">
                                        Date Joined
                                        </th>
                                        <th scope="col" className="border-0">
                                        Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !!this.state.memberData.data ?
                                            this.state.memberData.data.map((data, index) => 
                                                <tr key={index}>
                                                    <td scope="col" className="border-0">{data.name}</td>
                                                    <td scope="col" className="border-0">Vocation</td>
                                                    <td scope="col" className="border-0">{data.phone || "none yet"}</td>
                                                    <td scope="col" className="border-0">{data.email}</td>
                                                    <td scope="col" className="border-0">{data.location || "none yet"}</td>
                                                    <td scope="col" className="border-0">{data.package}</td>
                                                    <td scope="col" className="border-0">{data.joined}</td>
                                                    <td scope="col" className="border-0">Action</td>
                                                </tr>
                                            )
                                        : null
                                    }
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Modal size="lg" open={this.state.open} toggle={this.toggle}>
                <Row>
                    <Col>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Search your Existing Users</h6>
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                <Form>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormInput
                                                    id="addName"
                                                    type="text"
                                                    placeholder="Specify Name"
                                                    value={this.state.name}
                                                    onChange={this.nameChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormInput
                                                    id="addEntryDate"
                                                    type="number"
                                                    placeholder="Entry Date"
                                                    value={this.state.entry}
                                                    onChange={this.entryChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormInput
                                                    id="addEmail"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={this.emailChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormInput
                                                    id="addPhone"
                                                    type="number"
                                                    placeholder="Phone"
                                                    value={this.state.phone}
                                                    onChange={this.phoneChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
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
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormInput
                                                    id="addZip"
                                                    type="number"
                                                    placeholder="Specify Zip Code"
                                                    value={this.state.zip}
                                                    onChange={this.zipChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormSelect value={this.state.tags} onChange={this.tagsChange} id="addTags">
                                                    <option>Specify Tags...</option>
                                                    {
                                                        this.state.combinedData.tag ?
                                                            this.state.combinedData.tag.map((tag, index) => (
                                                                <option key={index}>{tag.tagname}</option>
                                                            ))
                                                            :
                                                        null
                                                    }
                                                </FormSelect>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormSelect value={this.state.lifestyle} onChange={this.lifestyleChange} id="addLifestyle">
                                                    <option>Specify Lifestyle...</option>
                                                    {
                                                        this.state.combinedData.lifestyle ?
                                                            this.state.combinedData.lifestyle.map((lifestyle, index) => (
                                                                <option key={index}>{lifestyle.ls_name}</option>
                                                            ))
                                                            :
                                                        null
                                                    }
                                                </FormSelect>
                                                <span style={{ fontSize: "12px" }}>
                                                    (Multiple lifestyle can be selected)
                                                </span>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <FormSelect value={this.state.vocation} onChange={this.vocationChange} id="addVocation">
                                                    <option>Choose Vocation...</option>
                                                    {
                                                        this.state.combinedData.vocation ?
                                                            this.state.combinedData.vocation.map((vocation, index) => (
                                                                <option key={index}>{vocation}</option>
                                                            ))
                                                            :
                                                        null
                                                    }
                                                </FormSelect>
                                            <span style={{ fontSize: "12px" }}>
                                                (Multiple vocations can be selected)
                                            </span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
            
                                    <Button
                                        className="bg-primary text-white text-center rounded p-3 "
                                        type="submit"
                                        onClick={this.searchData.bind(this)}
                                    >
                                        Search
                                    </Button>
                                </Form>
                                </Col>
                            </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Modal>
        </>
        )
    }

}

export default SearchUser;
