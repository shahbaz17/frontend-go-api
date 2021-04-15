import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import { withRouter } from 'next/router'

const Home = ({ router }) => {
	const user = useUser()

	return (
		<Layout>
			<h1>
				Frontend for{' '}
				<a
					href="https://github.com/shahbaz17/magic-go-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					Magic Go API
				</a>
			</h1>
			Hi {user && user.metadata.email} 🙋‍♂️!
			<p>
				The Go API is secured by the 🪄{' '}
				<a
					href="https://docs.magic.link/admin-sdk/go/get-started"
					target="_blank"
					rel="noopener noreferrer"
				>
					Magic Admin SDK for Go
				</a>
				.
			</p>
			<p>This is the frontend built on Next.js to get the DID Token.</p>
			<p>
				Get a copy from{' '}
				<a
					href="https://github.com/shahbaz17/frontend-go-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://github.com/shahbaz17/frontend-go-api
				</a>
			</p>
			{user ? (
				<>
					{user.didToken ? (
						<>
							<p>
								Below is your <b>DID token</b>. It has a lifespan of{' '}
								<b>8 hours 🪄.</b>
							</p>

							<p>
								You'll need it to access <b>/protected</b> endpoint of the Go
								API.
							</p>

							<p>
								<b>Your DID token is</b>:
							</p>
							<pre>{user.didToken}</pre>
							<p>
								❗️ Make sure to pass it as the <b>Bearer Token </b>
								when making an API call to Go backend!
							</p>
						</>
					) : (
						<>
							<p>
								😰 Your DID token's gone. Hope ya saved it somewhere safe! If
								not, you can regenerate it. Just log out & log in again 😄.
							</p>
						</>
					)}
				</>
			) : (
				<>
					<p>
						With Go API, all users could access the <b>/</b> endpoint.
						<br></br>
						However, if you want to access <b>/protected</b> endpoint, you'll
						first need to create an account and get your personal{' '}
						<b>DID Token</b>.
					</p>
				</>
			)}
			<p>
				✨ This is a demo app for{' '}
				<a
					href="https://github.com/shahbaz17/magic-go-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					Secure Go API with Magic
				</a>
				. ✨
			</p>
			<style jsx>{`
				li {
					margin-bottom: 0.5rem;
				}
				pre {
					white-space: pre-wrap;
					word-wrap: break-word;
				}
			`}</style>
		</Layout>
	)
}

export default withRouter(Home)
