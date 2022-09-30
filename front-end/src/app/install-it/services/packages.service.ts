import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {Package} from "../models/package.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {OperatingSystem} from "../models/operating-system.model";

const BASE_URL = environment.backendAPIBaseURL + '/packages';

@Injectable({ providedIn: 'root' })
export class PackagesService {
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Get al the packages that are available for a specific operating system
   */
  getPackages(operatingSystem: OperatingSystem): Observable<Package[]> {
    return this.http.get<Package[]>(BASE_URL + '?populate=*&' + `filter[operating-system][id]=${operatingSystem.id}`)
      .pipe(
        map((response: any) => {
          const packages: Package[] = []
          for (const instalablePackage of response.data) {
            packages.push({
              id: instalablePackage.id,
              name: instalablePackage.attributes.name,
              icon: environment.backendBaseURL + instalablePackage.attributes.icon.data.attributes.url,
              command: instalablePackage.attributes.command
            })
          }
          return packages;
        })
      );
  }
}
