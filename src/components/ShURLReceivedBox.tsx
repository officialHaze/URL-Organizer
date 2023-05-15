interface Props {
  shortUrl: string;
}

export default function ShURLReceivedBox({ shortUrl }: Props) {
  return (
    <div className="url-received-container">
      <div className="link-ready-logo" />
      <div>
        <h2>Your Link is ready!</h2>
      </div>
      <div className="input-wrapper" style={{padding:'0'}}>
        <input
          type="text"
          defaultValue={shortUrl}
          style={{ textAlign: "center", width: "90%" }}
        />
      </div>
      <div className="copy-link-btn-wrapper">
        <button>Copy link</button>
        <a href="/">Go back?</a>
      </div>
    </div>
  );
}
