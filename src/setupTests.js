import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import createChaiEnzyme from 'chai-enzyme'
import { configure as configureEnzyme } from 'enzyme'
import sinonChai from 'sinon-chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'

chai.use(dirtyChai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme())
    .use(sinonChai)
    .use(chaiJestSnapshot)

    expect.addSnapshotSerializer(enzymeToJSON)

configureEnzyme({ adapter: new Adapter() })