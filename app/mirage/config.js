export default function() {

  this.urlPrefix = 'http://localhost:3000';

  this.post('/tokens', function() {
    return {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    };
  });

  this.get('/me', function(db) {
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
