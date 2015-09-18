export default function() {

  this.post('/tokens', function(_, _) {
    return {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    };
  });

  this.get('/me', function(db, _) {
    let me = db.mes[0];

    return {
      data: {
        type: 'me',
        id: me.id,
        attributes: me
      }
    };
  });
}
