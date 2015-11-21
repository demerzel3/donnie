export class ItemView extends React.Component {
    constructor() {
        super();

        this.state = {
            editing: false,
        };

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({ editing: true });
    }

    save() {
        this.props.model.message = this.refs.editBox.value;
        this.setState({ editing: false });
    }

    render() {
        if (this.state.editing) {
            return this.renderEditor();
        } else {
            return this.renderDisplay();
        }
    }

    renderDisplay() {
        return (
            <li>
                {this.props.model.message}
                <button type="button" onClick={this.edit}>Edit</button>
            </li>
        );
    }

    renderEditor() {
        return (
            <li>
                <input type="text" defaultValue={this.props.model.message} ref="editBox"/>
                <button type="button" onClick={this.save}>Save</button>
            </li>
        );
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.editBox.focus();
        }
    }
}