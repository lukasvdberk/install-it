import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {OperatingSystem} from "../models/operating-system.model";

const BASE_URL = environment.backendAPIBaseURL + '/operating-systems';

@Injectable({ providedIn: 'root' })
export class OperatingSystemService {
  constructor(private http: HttpClient) { }

  /**
   * Gets all operating systems you can use to generate an installation script
   */
  getOperatingSystems(): Observable<OperatingSystem[]> {
    // populate is to get every possible filed
    return this.http.get<OperatingSystem[]>(BASE_URL  + '?populate=*')
      .pipe(
        map((response: any) => {
          console.log(response)
          const operatingSystems: OperatingSystem[] = []
          for (const operatingSystem of response.data) {
            operatingSystems.push({
              id: operatingSystem.attributes.id,
              name: operatingSystem.attributes.name,
              icon: environment.backendBaseURL + operatingSystem.attributes.icon.data.attributes.url
            })
          }
          console.log(operatingSystems)
          return operatingSystems;
        })
      );
  }

  /**
   * Gets all operating systems you can use to generate an installation script
   */
  getOperatingSystemByName(name: string): Observable<OperatingSystem> {
    // populate is to get every possible filed
    return this.http.get<OperatingSystem>(BASE_URL + `?filter[name]=${name}`)
  }
}
