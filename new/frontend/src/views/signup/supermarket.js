import React from 'react'
import {
Form,
InputGroup, InputGroupAddon,InputGroupText, Input,Button
} from "reactstrap";
function CustomerRegistration (){
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
return(
            <Form action="" className="form" method="post">
            <InputGroup
            className={
                "no-border input-lg" +
                (firstFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons ui-1_email-85"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Email Address"
                type="email"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (firstFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons shopping_shop"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Name of Supermarket"
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (firstFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons location_pin"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Address"
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (firstFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons location_world"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Service Area"
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (firstFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons tech_mobile"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Contact Number"
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (lastFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons objects_key-25"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Password"
                type="password"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
            ></Input>
            </InputGroup>
            <InputGroup
            className={
                "no-border input-lg" +
                (lastFocus ? " input-group-focus" : "")
            }
            >
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="now-ui-icons objects_key-25"></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Confirm Password"
                type="password"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
            ></Input>
            </InputGroup>
            <Button
            block
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="lg"
            >
            Sign Up 
            </Button>
            </Form>
)
}

export default CustomerRegistration;