import React from 'react'
import RepositoryListItem from './RepositoryListItem'

class RepositoryList extends React.Component {
    render() {
        return (
            <div className="section">
                <RepositoryListItem />
            </div>
        )
    }
}

export default RepositoryList