interface Props {
  shortUrl: string;
}

export default function ShURLReceivedBox({ shortUrl }: Props) {
  return (
    <div className="url-received-container">
      <div className="input-wrapper">
        <input
          type="text"
          defaultValue={shortUrl}
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="copy-link-btn-wrapper">
        <button>Copy link</button>
      </div>
    </div>
  );
}
