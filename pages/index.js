import Head from 'next/head'

export async function getStaticProps() {
  // fetch list of posts
  const res = await fetch(
    'https://cfcross1.sitecore-saas---staging.workers.dev/'
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default function IndexPage({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {JSON.stringify(data)}
      </section>
    </main>
  )
}
