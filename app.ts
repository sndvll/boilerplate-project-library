import { Server } from './core/Server';
import fccTestingRoutes from './fcc/fcctesting';
import helmet from 'helmet';

import Book from './entites/book';
import {MongoRepository} from './core/repository/MongoRepository';

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
      .addEntity<Book>(Book, new MongoRepository<Book>('', 'books'));

fccTestingRoutes(server.app);

server.start();
