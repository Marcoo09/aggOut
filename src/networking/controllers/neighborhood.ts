import {AxiosPromise} from 'axios';
import HttpService from '../HttpService';
import {NeighborhoodEndpoints} from '../endpoints';

export interface INeighborhoodController {
  getNeighborhoods(): AxiosPromise<any>;
}

class NeighborhoodController implements INeighborhoodController {
  getNeighborhoods(): AxiosPromise<any> {
    return HttpService.get(NeighborhoodEndpoints.GET_NEIGHBORHOOD);
  }
}

export default new NeighborhoodController();
