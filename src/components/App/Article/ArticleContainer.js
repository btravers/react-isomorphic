import { connect } from 'react-redux'

import getArticleById from '../../../selectors/getArticleById'
import Article from './Article'

const mapStateToProps = (state, { match: { params: { id } } }) => ({
    ...getArticleById(state, id),
})

export default connect(mapStateToProps)(Article)