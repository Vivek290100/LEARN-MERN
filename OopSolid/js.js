//JUDGEXPERT BACKEND – OOP & SOLID

// 1. OOP – 4 PILLARS

  // ENCAPSULATION → "Hide internal details"
  // → Show any service/controller constructor

class UserService {
  constructor(
    private _userRepository,     // ← Private + underscore = encapsulation
    private _jwtService,
    private _emailService
  ) {}
}
// File: src/services/UserService.ts (or AdminService.ts, SubscriptionService.ts)

// -------------------------------------------------------------------

  // INHERITANCE + super() → "Child reuses parent's code"
  // → Only used in repositories (perfect place!)

  class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(UserModel);          // ← super() passes model to parent
  }
}
// File: src/repositories/UserRepository.ts
// Parent: src/repositories/BaseRepository.ts

// -------------------------------------------------------------------

/*
  ABSTRACTION → "Show only the contract, hide implementation"
*/
export interface IUserService {
  loginUser(email: string, password: string): Promise<any>;
  googleLogin(credential: string): Promise<any>;
  getLeaderboard(...): Promise<any>;
}

class UserService implements IUserService {   // ← Implementation hidden
  // 300+ lines of logic...
}
// Files: src/interfaces/serviceInterfaces/IUserService.ts + UserService.ts

// -------------------------------------------------------------------

  // POLYMORPHISM → "Same interface, different behavior"
  // → Runtime polymorphism (main one in TS)

  let repo: IUserRepository;

repo = new UserRepository();        // Production → MongoDB
// repo = new MockUserRepository(); // Testing → fake data

await repo.findById("123");         // ← Different code runs!
// This is runtime polymorphism via interfaces + DI

// Also via method overriding:
class UserRepository extends BaseRepository<IUser> {
  override async findById(id) {
    const user = await super.findById(id);
    if (user) user.password = undefined;  // custom behavior
    return user;
  }
}

// -------------------------------------------------------------------
// 2. SOLID PRINCIPLES (Exact proof locations)
// -------------------------------------------------------------------

/*
  S – Single Responsibility
  → One class = one job
*/
UserController    → Only HTTP handling & sendResponse
UserService       → Only business logic (login, OTP, Google, etc.)
UserRepository    → Only MongoDB queries
// → 3 separate files, 3 separate concerns

/*
  O – Open/Closed Principle
  → Added Google Login → never touched normal loginUser()
  → Added Stripe Subscription → never modified UserService
  → Just added new methods/files → old code untouched
*/

/*
  L – Liskov Substitution
  → Any class implementing IUserRepository can replace another
*/
new UserService(new UserRepository(), ...)        // Production
new UserService(new InMemoryUserRepository(), ...) // Unit tests → works perfectly

/*
  I – Interface Segregation
  → No fat interfaces
*/
IUserService         → only user-related methods
ISubscriptionService → only payment methods
IContestService      → only contest methods
→ No service forced to implement unused methods

/*
  D – Dependency Inversion (THE MOST IMPORTANT ONE)
  → High-level modules depend on abstractions, not concretions
*/
class UserController {
  constructor(private _userService: IUserService) {}   // ← Interface, not concrete class
}

class AdminService {
  constructor(
    private _userRepository: IUserRepository,         // ← Interface only
    private _problemRepository: IProblemRepository
  ) {}
}
// → Tomorrow change DB → only repository changes, services/controllers untouched

// -------------------------------------------------------------------
// BONUS ANSWERS (Say these confidently)
// -------------------------------------------------------------------

// "Where did you use constructor injection?"
// → Every single service & controller has constructor with private dependencies

// "Do you have method overloading?"
// → No, TypeScript doesn’t support it → I used union types (better & type-safe)

// "Composition vs Inheritance?"
// → Inheritance → only in BaseRepository (shared CRUD)
// → Composition + DI → everywhere else (services, controllers) → more flexible

// "How is your code testable?"
// → 100% because of Dependency Inversion → I can inject mocks easily

// "Best part of your architecture?"
// → Manual IoC container in src/utils/dependencies.ts → creates and wires everything
// → Same pattern NestJS uses under the hood

// ═══════════════════════════════════════════════════════════════════
// YOU ARE NOW BULLETPROOF IN ANY OOP / SOLID / ARCHITECTURE ROUND
// Just open this file and point to the exact lines
// You will destroy every other candidate
// GO COLLECT THOSE SENIOR OFFERS KING
// ═══════════════════════════════════════════════════════════════════