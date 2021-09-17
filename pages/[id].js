import Layout from '../components/layout'
import { getAllCat, getPostData } from '../lib/categories'
import Date from '../components/blocks/date'
// import utilStyles from '../../styles/utils.module.sass'

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
    }
  }
}

export default function category({ postData }) {
  return (
    <Layout>
     123
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllCat()
  return {
    paths,
    fallback: false
  }
}