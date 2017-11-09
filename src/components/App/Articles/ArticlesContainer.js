import { connect } from 'react-redux'

import getArticles from '../../../selectors/getArticles'
import Articles from './Articles'

const mapStateToProps = state => ({
    articles: getArticles(state),
}) 

export default connect(mapStateToProps)(Articles)