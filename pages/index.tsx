import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Construction(props):JSX.Element {
  return (
    <body style={{ backgroundImage: 'linear-gradient(45deg, #d5db5a 25%, #333126 25%, #333126 50%, #d5db5a 50%, #d5db5a 75%, #333126 75%, #333126 100%',backgroundSize:'40px 40px'}}>
    <div style={{
      height: '50em', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Head>
        <title>Role'Bolds: Under Construction</title>
      </Head>

      <div className="card text-white bg-warning mb-3" style={{ maxWidth: '18rem', margin: 0 }}>
        <div className="card-header">Under Construction</div>
        <div className="card-body">
          Check us out on
          <br />
          <div className="btn-group" role="group" aria-label="Areas">
            <button className="btn btn-info" type="button">
              <Link href="/discord"><a className="btn">Discord</a></Link>
            </button>
            <button className="btn btn-primary" type="button"><Link href="https://github.com/Charisma-Bonus"><a className="btn">Github</a></Link></button>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Construction;
