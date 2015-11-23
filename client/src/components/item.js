import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
    render() {
        if (this.props.editing) {
            return this.renderEditor();
        } else {
            return this.renderDisplay();
        }
    }

    renderDisplay() {
        return (
            <li>
                {this.props.message}
                <button type="button" onClick={e => this.props.onEdit()}>Edit</button>
            </li>
        );
    }

    renderEditor() {
        return (
            <li>
                <input type="text" defaultValue={this.props.message} ref="editBox"/>
                <button type="button" onClick={() => this.props.onSave(this.refs.editBox.value)}>Save</button>
            </li>
        );
    }

    componentDidUpdate() {
        if (this.props.editing) {
            this.refs.editBox.focus();
        }
    }
}

Item.propTypes = {
    editing: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};