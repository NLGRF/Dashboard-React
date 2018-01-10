import React from 'react'
import NewRepoForm from 'components/NewRepoForm'
import RepositoryList from 'components/RepositoryList'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NewRepoForm />
                <RepositoryList />
            </div>
        )
    }
}

export default Dashboard