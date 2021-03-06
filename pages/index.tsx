import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export const config = {amp: 'hybrid'}

function Construction(props):JSX.Element {
  return (
          <div style={{height: '50em',display: 'flex', alignItems:'center',justifyContent:'center'}}>
            <Head>
              <title>Role'Bolds: Under Construction</title>
            </Head>

            <div className="card text-white bg-warning mb-3" style={{maxWidth: '18rem', margin: 0}}>
              <div className="card-header">Under Construction</div>
              <div className="card-body">
                Check us out on
                <br/>
                <div className="btn-group" role="group" aria-label="Areas">
                <button className="btn btn-info" type="button"><Link href='/dicord'><a className='btn'>Discord</a></Link>
                </button>
                <button className="btn btn-primary" type="button"><Link  href='https://github.com/Charisma-Bonus'><a className='btn'>Github</a></Link></button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Construction