import { Server } from './core/Server';
import fccTestingRoutes from './fcc/fcctesting';
import helmet from 'helmet';
import { MongoRepository } from './repo/MongoRepository';

import Book from './entites/book';

const server = new Server('api')
    .setPort(3000)
    .useCors('*')
    .applyBodyParser()
    .addViews('/public', '/', '/views/index.html')
    .applyMiddleware(helmet({
        hidePoweredBy: true,
        noSniff: true,
        xssFilter: true
      }))
      .addEntity<Book>(Book, new MongoRepository<Book>('book'));

fccTestingRoutes(server.app);

server.start();
