import React, {Component} from 'react';
import pickService from "../services/PickService";

class ListPicksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picks: []
        }
    }

    componentDidMount() {
        pickService.getPicks().then(res => {
            this.setState( {picks: res.data})
        })
    }

    render() {
        return (
            <div>
                <br/>
                <h1 className="text-center">Pick List</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Stake</th>
                                <th>Team</th>
                                <th>Price</th>
                                <th>Forecast</th>
                                <th>Bet Type</th>
                                <th>Competition</th>
                                <th>Venue</th>
                                <th>Opposition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.picks.map(
                                pick =>
                                <tr key = {pick.id}>
                                    <td>{pick.stake}</td>
                                    <td>{pick.team}</td>
                                    <td>{pick.price}</td>
                                    <td>{pick.forecast}</td>
                                    <td>{pick.betType}</td>
                                    <td>{pick.competition}</td>
                                    <td>{pick.venue}</td>
                                    <td>{pick.opposition}</td>
                                    <td>
                                        <a href="/picks/edit/{postId}(postId=${post.id})}" className="btn btn-primary">Edit</a>
                                        <a href="{/picks/delete/{pickId}(pickId=${pick.id})}" className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPicksComponent;