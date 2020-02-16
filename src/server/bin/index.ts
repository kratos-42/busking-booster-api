import app from 'app';
import config from 'config';

const port = config.get('server.port');

// Start server.
app.listen(port);
