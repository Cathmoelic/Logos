import React, {Component, Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Axiom from './Axiom';

class Argument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      belief: "undecided"
    };
  }

  renderPremise(premise) {
    if (premise.type === "axiom") {
      return <Axiom 
      sentence={premise.sentence}
      onChange={premise.onChange} />
    }
    if (premise.type === "argument") {
      return <Argument 
        premises={premise.premises}
        conclusion={premise.conclusion}/>
    }    
  }

  render() {
    return (
      <Fragment>
        <ul class="list-group">
          {this.props.premises.map(premise => (
            <li className="list-group-item list-group-item-primary">
              {this.renderPremise(premise)}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Argument;
