// Importing required components.
import { Injectable } from "@angular/core"

// Injectable Decorator.
@Injectable()
export class LoggingService {
    // Log method.
    log() {
        console.log("Adding data");
    }
    // Information method.
    info() {
        console.log("Retrieving data");
    }
    // Warning method.
    warn() {
        console.log("Deleted data.");
    }
    // Clear method.
    clear() {
        console.log("Cleared fields");
    }
}